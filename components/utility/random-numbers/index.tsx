'use client'

import { useState } from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

import { cn, generateRandomNumbers, getRandomInt } from "@/lib/utils"

const randomNumbers = [
    { value: 5, label: "5" },
    { value: 6, label: "6" },
    { value: 7, label: "7" },
    { value: 8, label: "8" },
    { value: 9, label: "9" },
    { value: 10, label: "10" },
    { value: 11, label: "11" },
    { value: 12, label: "12" },
    { value: 13, label: "13" },
    { value: 14, label: "14" },
    { value: 15, label: "15" },
]

type RandomNumbersProps = {
    className?: string
}

const RandomNumbers = ({
    className
}: RandomNumbersProps) => {
    const [count, setCount] = useState<string>('8')
    const [number, setNumber] = useState<string>('')

    const handleGenerate = () => {
        setNumber(generateRandomNumbers(parseInt(count)).join(''))
    }

    return (
        <div className={cn("Container flex flex-col space-y-2 border rounded-sm p-4", className)}>
            <h2 className="font-semibold text-xl">1. 生成随机数</h2>
            <div className="flex space-x-2 items-center">
                <Button
                    variant={'outline'}
                    onClick={handleGenerate}
                >生成</Button>
                <div className="flex items-center space-x-1">
                    <Select defaultValue={count} onValueChange={setCount}>
                        <SelectTrigger className="w-fit">
                            <SelectValue placeholder='选择最大位数' />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>随机数的位数</SelectLabel>
                                {randomNumbers.map((item, index) => (
                                    <SelectItem key={index} value={`${item.value}`}>
                                        {item.label}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <span className="">
                        {`位随机数:`}
                    </span>
                </div>
                <Label className="font-semibold text-lg">{number}</Label>
            </div>
        </div>
    )
}

export default RandomNumbers