type TrailerModalProps = {
    videoKey: string;
    onClose: () => void;
};

const TrailerModal = ({ videoKey, onClose }: TrailerModalProps) => {
    return (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
           
            <div
                className="absolute inset-0"
                onClick={onClose}
            />

            <div className="relative z-10 w-full max-w-4xl aspect-video bg-black">
                <button
                    onClick={onClose}
                    className="absolute -top-10 right-0 text-white text-xl"
                >
                    ✕
                </button>

                <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
                    title="Movie Trailer"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                />
            </div>
        </div>
    );
};

export default TrailerModal;