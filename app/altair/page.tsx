import { Separator } from "@/components/ui/separator"
import RandomNumbers from "@/components/utility/random-numbers"

const AltairHome = () => {
    return (
        <main className="h-full p-4 space-y-4">
            <h2 className="font-bold text-2xl">{`Altair's Private Space`}</h2>
            <Separator />

            <RandomNumbers />
        </main>
    )
}

export default AltairHome