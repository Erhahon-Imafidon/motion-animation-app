import { Link } from 'react-router';
import { AnimatePresence, motion } from 'motion/react';
import type { Variants } from 'motion/react';

interface ModalProps {
    showModal: boolean;
    setShowModal: (show: boolean) => void;
    children?: React.ReactNode;
}

const backdropVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
};

const modal: Variants = {
    hidden: {
        y: '-100vh',
        opacity: 0,
    },

    visible: {
        y: '400px',
        opacity: 1,
        transition: { delay: 0.5, type: 'spring', stiffness: 120 },
    },
};

const Modal = ({ showModal, children, setShowModal }: ModalProps) => {
    return (
        <AnimatePresence mode="wait">
            {showModal && (
                <motion.div
                    className="fixed inset-0 size-full bg-black/50  z-1"
                    variants={backdropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    <motion.div
                        className="max-w-100 mx-auto bg-white py-10 px-5 rounded-lg text-center"
                        variants={modal}
                    >
                        <p className="text-primary font-bold">
                            Want to make another pizza?
                        </p>
                        <Link to="/">
                            <button
                                className="!text-primary font-bold mt-5 !border-primary"
                                onClick={() => setShowModal(false)}
                            >
                                Start Again
                            </button>
                        </Link>
                    </motion.div>
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
