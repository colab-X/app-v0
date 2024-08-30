import * as React from "react";
import Header from "@/components/Header";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"


export default function NewProject() {


    return(
        <main className="mx-10">
            <Header />
            <div className="flex justify-center font-semibold text-3xl pb-10">
                New Project
            </div>
            <div className="flex justify-center">
                <div className="flex-col items-center justify-center">
                    <div className="pb-4">
                        <label htmlFor="name">Name</label>
                        <Input id="image" type="text" placeholder="Image" />
                    </div>
                    <div className="pb-4">
                        <label htmlFor="picture">Picture</label>
                        <Input id="picture" type="file" />
                    </div>
                    <div className="pb-4">
                        <label htmlFor="description">Description</label>
                        <Input id="description" type="description" />
                    </div>
                    <div className="pt-7 flex justify-center">
                        <Button>Add Project</Button>
                    </div>
                </div>
            </div>
        </main>
    )
}