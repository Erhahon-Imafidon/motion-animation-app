import { Link } from 'react-router';
import { AnimatePresence, motion } from 'motion/react';

interface ModalProps {
    showModal: boolean;
    setShowModal: (show: boolean) => void;
    children?: React.ReactNode;
}

const backdropVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
};

const Modal = ({ showModal, children, setShowModal }: ModalProps) => {
    return (
        <AnimatePresence mode="wait">
            {showModal && (
                <motion.div
                    className="fixed inset-0 size-full bg-black/50 flex items-center justify-center z-1"
                    variants={backdropVariants}
                    initial="hidden"
                    animate="visible"
                    // onClick={() => setShowModal(false)}
                >
                    <motion.div className="max-w-100 bg-white py-10 px-5 rounded-lg text-center">
                        <p className="text-primary font-bold">
                            Want to make another pizza?
                        </p>
                        <Link to="/">
                            <button className="!text-primary font-bold mt-5 !border-primary">
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
