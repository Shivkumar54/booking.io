import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./userSlice"
// import bookingDetail from "./bookingDetail"

const store = configureStore({
  reducer: {
    user: userSlice,
    // booking: bookingDetail,
  },
})

export default store
