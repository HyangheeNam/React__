import { useLocation } from 'react-router-dom';

const NewsDetail = (): JSX.Element => {
    const location = useLocation();
    const { url } = location.state as { url: string } || { url: '' };

    return (
        <div>
            <h2>News Details</h2>
            {url ? (
                <iframe
                    title="news-detail"
                    src={url}
                    width="100%"
                    height="600px"
                    frameBorder="0"
                />
            ) : (
                <p>Invalid URL</p>
            )}
        </div>
    );
};

export default NewsDetail;
