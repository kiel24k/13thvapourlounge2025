import { useQuery } from "@tanstack/react-query"
import { bestSellerProduct, trendingProducts } from "../api/analytic.api"

export const useTrendingProduct = () => {
    return useQuery({
        queryFn: trendingProducts,
        queryKey: ['trendingProducts']
    }) 
}

export const useBestSeller = () => {
    return useQuery({
        queryFn: bestSellerProduct,
        queryKey: ['best-seller-product']
    }) 
}