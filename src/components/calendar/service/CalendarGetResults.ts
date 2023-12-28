import { Dispatch, SetStateAction } from "react"
import axiosHandler from "../../../common/handleAxiosRequests"

export async function getBanksAndCategories(
      setBanksInfos: Dispatch<SetStateAction<never[]>>,
      setCategoryInfos: Dispatch<SetStateAction<never[]>>,
      setBalanceInfos: Dispatch<SetStateAction<never[]>>,
      from: string,
      to: string
  ) {
  

  const balance = await axiosHandler(`/balance/estimate/period?from=${from}&to=${to}`, 'GET')
  const banks = await axiosHandler(`/categories/period?from=${from}&to=${to}`, 'GET')
  const categories = await axiosHandler(`/wallets/period?from=${from}&to=${to}`, 'GET')
  
  setBalanceInfos(balance.data)
  setBanksInfos(banks.data)
  setCategoryInfos(categories.data)
}