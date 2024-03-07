import { createSlice } from "@reduxjs/toolkit"

const bookingSlice = createSlice({
  name: "booking",
  initialState: [],
  reducers: {
    addBookingData: (state, action) => {
      return action.payload
    },
  },
})

export const { addBookingData } = bookingSlice.actions
export default bookingSlice.reducer
