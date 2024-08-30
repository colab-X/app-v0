import * as React from "react";
import Header from "@/components/Header";
import CreateProjectCard from "@/components/CreateProjectCard";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"


export default function NewProject() {


    return(
        <main className="mx-10">
            <Header />
            <CreateProjectCard />
        </main>
    )
}