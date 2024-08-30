import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function CreateProjectCard() {
  return (
    <main className="pt-10 flex justify-center">
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Create project</CardTitle>
                <CardDescription>Deploy your new project in one-click.</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Name of your project" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Media</Label>
                            <Input id="media" placeholder="UploadMedia" type="file" />
                        </div>

                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="Description">Description</Label>
                            <Input id="Description" placeholder="Description" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="Category">Category</Label>
                            <Select>
                                <SelectTrigger id="Category">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="next">Music</SelectItem>
                                    <SelectItem value="sveltekit">Art</SelectItem>
                                    <SelectItem value="astro">Video</SelectItem>
                                    <SelectItem value="nuxt">Creatives</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </form>
            </CardContent>
        <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Deploy</Button>
        </CardFooter>
        </Card>
    </main>
    )
}
