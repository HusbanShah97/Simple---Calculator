"use client";
import { useState, changeEvent } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input} from "@/components/ui/input";
import { Button } from "@/components/ui/button";



export default function Calculator() {
    
    const [Num1, setNum1] = useState<string>("");
    const [Num2, setNum2] = useState<string>("");
    const [Result, setResult] = useState<string>("");

    const handleNum1Change = (e: changeEvent<HTMLInputElement>): void => {
        setNum1(e.target.value);
        
    }

    const handleNum2Change = (e: changeEvent<HTMLInputElement>): void => {
        setNum2(e.target.value);
        
    }


}