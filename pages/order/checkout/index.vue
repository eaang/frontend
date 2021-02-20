<template>
  <div>
    <div class="w-full h-12">
      <div class="flex h-full items-center pl-6 font-semibold text-xl">
        Your Order
      </div>
    </div>
    <div class="space-y-6 my-6">
      <!-- Item Details -->
      <div class="space-y-2">
        <div class="flex px-6 space-x-3 items-center">
          <div class="w-28">
            <img
              :src="order.gift.image.url"
              alt=""
              class="w-28 h-28 object-cover rounded-lg border border-gray-200"
            />
          </div>
          <div>
            <div class="text-gray-400 text-xs">
              {{ order.gift.brand.name }}
            </div>
            <div class="text-sm">
              {{ order.gift.name }}
            </div>
            <div class="flex text-sm">
              <div class="text-purple-800">
                {{ displayPrice(order.gift.price) }}
              </div>
              <div class="text-gray-600">&nbsp;x {{ order.quantity }}</div>
            </div>
          </div>
        </div>

        <div class="px-6 flex justify-between font-semibold">
          <div>
            {{ order.gift.name }}
          </div>
          <div class="text-purple-800">
            {{ displayPrice(totalAmount) }}
          </div>
        </div>
      </div>

      <!-- Order Details -->
      <div class="px-6 space-y-6">
        <div>
          <div
            class="flex py-3 px-4 w-full border border-gray-200 rounded-full items-center"
          >
            <input class="flex-1 text-sm" placeholder="ENTER VOUCHER CODE" />
            <div class="text-sm">APPLY</div>
          </div>
        </div>

        <div class="space-y-6 font-semibold border-b border-gray-200 pb-6">
          <div class="flex justify-between">
            <div>No. of items:</div>
            <div class="text-gray-400">{{ order.quantity }}</div>
          </div>
          <div class="flex justify-between">
            <div>Total order amount:</div>
            <div class="text-gray-400">
              {{ displayPrice(totalAmount) }}
            </div>
          </div>
          <div class="flex justify-between">
            <div>Processing fees:</div>
            <div class="text-gray-400">
              {{ displayPrice(processingFees) }}
            </div>
          </div>
          <div class="flex justify-between">
            <div>Total price:</div>
            <div class="text-purple-800">
              {{ displayPrice(totalAmount + processingFees) }}
            </div>
          </div>
        </div>
      </div>

      <!-- Payment Elements -->
      <div class="px-6 space-y-6">
        <div class="font-semibold text-lg">Payment</div>

        <div class="space-y-6">
          <div class="">
            <card
              class="font-sans text-xs"
              :class="{ complete }"
              ref="card-stripe"
              :stripe="$config.stripeKey"
              :options="stripeOptions"
              @change="complete = $event.complete"
            />
          </div>
          <div @click="pay">
            <Button
              text="Confirm purchase"
              classes="primary btn-pill"
              :class="{ disabled: !complete || loading }"
            />
          </div>
          <div class="text-center" @click="goBack">
            <nuxt-link to="/order/checkout" class="underline text-purple-800"
              >return to previous page</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Card, createToken } from 'vue-stripe-elements-plus'

const currencyOptions = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'SGD',
}).resolvedOptions()

export default {
  data() {
    return {
      loading: false,
      complete: false,
      stripeOptions: {
        style: {
          base: {
            fontWeight: 400,
            fontFamily:
              'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
            fontSize: '16px',
          },
        },
      },
    }
  },
  components: {
    Card,
  },
  computed: {
    order() {
      return this.$store.state.order.order
    },
    processingFees() {
      return +(this.order.quantity * 0.034 + 0.5).toFixed(2)
    },
    totalAmount() {
      return this.order.gift.price * this.order.quantity
    },
  },
  methods: {
    displayPrice(x) {
      return (
        '$' +
        x.toLocaleString('en-US', {
          ...currencyOptions,
          style: 'decimal',
        })
      )
    },
    goBack() {
      this.$router.go(-1)
    },
    async pay() {
      if (this.complete) {
        let token
        try {
          const response = await createToken()
          token = response.token.id
        } catch (err) {
          alert('Some frontend issue.')
          this.loading = false
          return
        }
        try {
          const newOrder = await this.$strapi.create('orders', {
            gift: this.order.gift,
            quantity: this.order.quantity,
            price: +this.totalAmount.toFixed(2),
            message: this.order.message,
            background: this.order.bg,
            token,
          })
          console.log(newOrder)
          alert('Your order has been successfully submitted.')
          this.$router.push('/order/' + newOrder.id)
        } catch (err) {
          alert('Some backend issue.')
        }
      }
    },
  },
}
</script>
