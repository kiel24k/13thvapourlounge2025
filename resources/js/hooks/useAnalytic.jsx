import { useQuery } from "@tanstack/react-query"
import { trendingProducts } from "../api/analytic.api"

export const useTrendingProduct = () => {
    return useQuery({
        queryFn: trendingProducts,
        queryKey: ['trendingProducts']
    }) 
}