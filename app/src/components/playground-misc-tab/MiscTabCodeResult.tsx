import React, { useEffect } from 'react';
import "../../css/prism.css";
const Prism = require('prismjs');

interface MiscTabCodeResultProps {
    code?: string,
}

const MiscTabCodeResult: React.FC<MiscTabCodeResultProps> = ({ code }) => {

    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <>
            <pre style={{ height: '74vh' }}>
                <code className="language-cpp">
                    {code}
                </code>
            </pre>
        </>
    );
}

export default MiscTabCodeResult;