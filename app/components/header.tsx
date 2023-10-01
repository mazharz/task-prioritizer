"use client";

import Link from "next/link";
import { GithubIcon } from "../assets/github";
import { cinzel } from "../helper/font";
import { QuestionMarkIcon } from "../assets/question-mark";
import { useRef } from "react";

const Header = () => {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  const modalOpenHandler = () => {
    modalRef.current?.showModal();
  };

  const modalCloseHandler = () => {
    modalRef.current?.close();
  };

  return (
    <header className={`${cinzel.className} bg-gray-700`}>
      <div className="max-w-7xl mx-auto py-2 flex justify-between items-center">
        <div className="text-2xl">
          Task <span className="font-medium">Prioritizer</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-6 w-6">
            <Link
              href="https://github.com/mazharz/task-prioritizer"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-gray-400"
            >
              <GithubIcon />
            </Link>
          </div>
          <div
            onClick={modalOpenHandler}
            className="h-6 w-6 text-gray-300 hover:text-gray-400 cursor-pointer"
            title="This is a technique to prioritize your todo tasks, you create categories per your core values (where you want to grow), then you assign your tasks to those said categories, the more categories they get assigned to, the higher priority they will have. This was inspired by a post by Sarah Drasner on css tricks. Made by Maz."
          >
            <QuestionMarkIcon />
          </div>
          <dialog ref={modalRef}>
            <p>dialog here</p>
            <button onClick={modalCloseHandler}>close</button>
          </dialog>
        </div>
      </div>
    </header>
  );
};

export { Header };
