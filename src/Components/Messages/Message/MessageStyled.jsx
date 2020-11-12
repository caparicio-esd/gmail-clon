import tw, { styled } from 'twin.macro';

const MessageStyled = styled.article`
    ${tw`py-2 px-4 flex border-b border-gray-800`}
    overflow: hidden;
    ${({ selected }) => selected && tw`bg-gray-700 text-gray-800`}

    .message_author_pic {
        width: 50px;
        height: 50px;
        flex: 0 0 auto;
        ${tw`mr-4`}

        img {
            ${tw`w-full object-cover`}
        }
    }
    .message_content {
        ${tw`flex-1`}
        overflow: hidden;

        .message_header {
            ${tw`flex justify-between items-center mb-2`};

            .message_author_name {
                ${tw`text-lg font-semibold truncate mr-3`}
                ${({ selected }) => selected && tw`text-gray-100`}
            }
            .message_meta {
                ${tw`flex ml-auto mr-2`};
                * {
                    ${tw`mr-1`};
                }
            }
            .message_time {
                ${tw`text-gray-500`}
            }
            .message_menu {
                ${tw`ml-2`}
                position: relative;

                .message_menu_content {
                    position: absolute;
                    right: 2rem;
                    top: 0%;
                    z-index: 2;
                    width: 200px;
                    ${tw`p-2 bg-gray-100 text-gray-800`}

                    ul {
                        ${tw`m-0 p-0 list-none`}
                        li {
                            ${tw`flex justify-end items-center`}
                        }
                    }
                }
            }
        }
        .message_subject {
            ${tw`mb-1 font-semibold truncate w-4/5 text-gray-300`}
        }
        .message_footer {
            ${tw`flex justify-between items-center`}
            .message_summary {
                ${tw`truncate w-4/5 text-gray-500`}
            }
            .message_faved {
            }
        }
    }
`;

const StarIconStyled = styled.span`
    svg {
        ${tw`text-yellow-500`};
        ${({ faved }) => !faved && `fill: none; stroke: currentColor`};
        ${({ faved }) => !faved && `stroke-opacity: .5`};
        stroke-width: 2px;
    }
`;

const FolderIconStyled = styled.span`
    svg {
        ${tw`text-yellow-500 fill-current`};
        ${({ folderId }) => `color: hsla(${(360 / 20) * folderId}, 100%, 50%, 1)`}
    }
`;

export { MessageStyled, StarIconStyled, FolderIconStyled };
export default MessageStyled;
