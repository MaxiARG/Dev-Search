import { useAtomValue } from "jotai/react"
import { atomWithStorage } from "jotai/utils"
//There is no need to keep this inside the hook
const favorite_WithStorage = atomWithStorage('test', 'placeholder useFavoriteStorage')
/**
 * Sync favorite with async storage on app startup
 * @returns favorite user
 */
const useFavoriteStorage = () => {
    const favorite = useAtomValue(favorite_WithStorage)
    return ({ favorite })
}

export default useFavoriteStorage