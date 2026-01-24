import { motion, stagger, useAnimate, useInView } from "motion/react";
import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

export const TypewriterEffect = ({
    words,
    className,
    cursorClassName,
}: {
    words: {
        text: string;
        className?: string;
    }[];
    className?: string;
    cursorClassName?: string;
}) => {


    const [showCursor, setShowCursor] = useState(true);

    // split text inside of words into array of characters
    const wordsArray = words.map((word) => {
        return {
            ...word,
            text: word.text.split(""),
        };
    });

    const [scope, animate] = useAnimate();
    const isInView = useInView(scope);

    useEffect(() => {
        if (isInView) {
            animate(
                "span",
                {
                    display: "inline-block",
                    opacity: 1,
                    width: "fit-content",
                },
                {
                    duration: 0.07,
                    delay: stagger(0.07),
                    ease: "easeInOut",
                }
            ).then(() => {
                // cuando termina de escribir
                setShowCursor(false);
            });
        }
    }, [isInView, animate]);

    const renderWords = () => {
        return (
            <motion.div ref={scope} className="inline" translate="no">
                {wordsArray.map((word, idx) => {
                    return (
                        <div key={`word-${idx}`} className="inline-block">
                            {word.text.map((char, index) => (
                                <motion.span
                                    initial={{}}
                                    key={`char-${index}`}
                                    className={cn(
                                        ` opacity-0 hidden`,
                                        word.className
                                    )}
                                >
                                    {char}
                                </motion.span>
                            ))}
                            &nbsp;
                        </div>
                    );
                })}
            </motion.div>
        );
    };
    return (
        <div
            className={cn(
                "font-bold text-2xl lg:text-3xl mt-1",
                className
            )}
        >
            {renderWords()}
            {showCursor && (
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    className={cn(
                        "inline-block rounded-sm w-1 h-4 lg:h-6 bg-[#b03a3a]",
                        cursorClassName
                    )}
                />
            )}
        </div>
    );
};