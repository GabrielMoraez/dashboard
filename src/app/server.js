import { createServer } from "miragejs"
import orders from '../../data/orders.json'

export default function makeServer() {
  createServer({
    routes() {
      this.get("api/orders", () => orders)
    }
  })
}