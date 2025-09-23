// import { Link } from 'react-router';
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
        <AnimatePresence>
            {showModal && (
                <motion.div
                    className="fixed inset-0 size-full bg-black/50 flex items-center justify-center z-1"
                    variants={backdropVariants}
                    initial="hidden"
                    animate="visible"
                    onClick={() => setShowModal(false)}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
