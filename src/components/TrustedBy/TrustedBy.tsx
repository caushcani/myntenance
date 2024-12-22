"use client"

import Marquee from "../magicui/marquee"
import { FolderGit2, GitFork, Star, User } from "lucide-react"
import { Avatar, AvatarImage } from "../ui/avatar"
import { CardNumber } from "./CardNumber"
import { CardLabel } from "./CardLabel"
import { Card } from "./Card"

type Props = {
  stargazers: number
  forks: number
  users: number
  projects: number
}

export default function TrustedBy({
  stargazers,
  forks,
  users,
  projects,
}: Props) {
  return (
    <div className="w-full pb-6">
      <h2 className="text-xl font-semibold md:text-2xl">Trusted by</h2>
      <Marquee
        pauseOnHover
        className="pb-8 pt-4 [--duration:40s] [--gap:1rem] md:[--gap:3rem]"
      >
        <Card>
          <CardNumber value={stargazers}>
            <Star className="size-8" />
          </CardNumber>
          <CardLabel>Stars</CardLabel>
        </Card>
        <Card>
          <a
            href="https://www.youtube.com/@DevLeonardo"
            target="_blank"
            rel="noreferrer"
          >
            <Avatar>
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/7253929?v=4"
                alt="Balastrong"
              />
            </Avatar>
          </a>
          <CardLabel>Myself {":)"}</CardLabel>
        </Card>
        <Card>
          <CardNumber value={users}>
            <User className="size-8" />
          </CardNumber>
          <CardLabel>Users</CardLabel>
        </Card>
        <Card>
          <CardNumber value={projects}>
            <FolderGit2 className="size-8" />
          </CardNumber>
          <CardLabel>Projects</CardLabel>
        </Card>
        <Card>
          <CardNumber value={forks}>
            <GitFork className="size-8" />
          </CardNumber>
          <CardLabel>Forks</CardLabel>
        </Card>
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  )
}
