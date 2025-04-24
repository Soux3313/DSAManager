import React, { useEffect, useRef } from "react";
import SimpleMDE from "simplemde";
import "simplemde/dist/simplemde.min.css";
import "../styles/simplemde-dark.css";

const Notes: React.FC = () => {
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const simplemdeRef = useRef<SimpleMDE | null>(null);

    useEffect(() => {
        if (textareaRef.current && !simplemdeRef.current) {
            // Initialize SimpleMDE
            simplemdeRef.current = new SimpleMDE({
                spellChecker: false,
                status: false,
                autosave: {
                    enabled: true,
                    uniqueId: "notes",
                    delay: 1000,
                },
                toolbar: [
                    "heading",
                    "bold",
                    "italic",
                    "unordered-list",
                    "ordered-list"
                ],
            });

            // Load saved notes
            const saved = localStorage.getItem("notes");
            if (saved) {
                simplemdeRef.current.value(saved);
            }

            // Save on change
            simplemdeRef.current.codemirror.on("change", () => {
                const val = simplemdeRef.current?.value() || "";
                localStorage.setItem("notes", val);
            });
        }
    }, []);

    return (
        <div >
            <textarea ref={textareaRef} />
        </div>
    );
};

export default Notes;