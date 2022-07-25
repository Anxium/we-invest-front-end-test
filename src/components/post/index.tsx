import { Menu, Transition } from "@headlessui/react";
import { DotsVerticalIcon, StarIcon, TrashIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import { useState } from "react";
import toast from "react-hot-toast";
import Comment from "../comment";
import { PostProps } from "./index.types";

const Post = ({ id, userId, title, body, comments, deleteFn }: PostProps) => {
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  const _copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(id);
      toast.success(`Post ID "${id}" successfully copied`);
    } catch {
      toast.error(`Can't copy post ID to clipboard`);
    }
  };

  const _handleDelete = async () => {
    await deleteFn(id).finally(() => setIsDeleting(false));
  };

  return (
    <li className="bg-white shadow sm:rounded-lg">
      <article aria-labelledby="question-title-81614">
        <div className="divide-y divide-gray-200">
          <div className="px-4 py-6 sm:p-6">
            <div className="flex space-x-3 items-center">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  <a href="#" className="hover:underline">
                    {userId} (TODO: Get user)
                  </a>
                </p>
                <p className="text-sm text-gray-500">
                  <a href="#" className="hover:underline">
                    ID: {userId}
                  </a>
                </p>
              </div>

              <div className="flex-shrink-0 self-center flex">
                <div className="relative inline-block text-left">
                  <Menu>
                    <div>
                      <Menu.Button
                        type="button"
                        className="-m-2 p-2 rounded-full flex items-center text-gray-400 hover:text-gray-600"
                        id="options-menu-0-button"
                        aria-expanded="false"
                        aria-haspopup="true"
                      >
                        <span className="sr-only">Open options</span>
                        <DotsVerticalIcon className="h-5 w-5" />
                      </Menu.Button>
                    </div>

                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-in"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Menu.Items
                        className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu-0-button"
                        tabIndex={-1}
                      >
                        <div className="py-1" role="none">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={clsx(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700 ",
                                  "w-full flex px-4 py-2 text-sm"
                                )}
                                role="menuitem"
                                tabIndex={-1}
                                id="options-menu-0-item-0"
                                onClick={_copyToClipboard}
                              >
                                <StarIcon className="mr-3 h-5 w-5 text-gray-400" />
                                <span>Copy ID to clipboard</span>
                              </button>
                            )}
                          </Menu.Item>

                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={clsx(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700 ",
                                  "w-full flex px-4 py-2 text-sm"
                                )}
                                role="menuitem"
                                tabIndex={-1}
                                id="options-menu-0-item-0"
                                onClick={async () => {
                                  setIsDeleting(true);
                                  await _handleDelete();
                                }}
                              >
                                <TrashIcon className="mr-3 h-5 w-5 text-gray-400" />
                                <span>Delete</span>
                              </button>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <h2
              id="question-title-81614"
              className="mt-4 text-base font-medium text-gray-900"
            >
              {title}
            </h2>

            <div className="mt-2 text-sm text-gray-700 space-y-4">{body}</div>
          </div>

          <div>
            <div className="px-4 py-6 sm:p-6">
              {/* Comments */}
              <ul role="list" className="space-y-8">
                {comments.map((c) => (
                  <Comment key={`comment-${c.id}`} {...c} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </article>
    </li>
  );
};

export default Post;
