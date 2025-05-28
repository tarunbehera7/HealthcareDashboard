import React from 'react';
import HealthStatus from '../HealthStatusCards/HealthStatus';

const AnatomySection = () => {
    return (
        <div className="body-status">
            <div className="body-image-container">
                <img className="body-image" src="/body1.png" alt="body" />
                <div className="body-label">
                    <span className="icon">❤️</span>
                    <span className="label-text">Healthy Heart</span>
                </div>
                <img className="body-image2" src="/Frame.png" alt="body" />
                <div className="body-label" >
                    <span className="icon">🦵</span>
                    <span className="label-text">Healthy Leg</span>
                </div>
                <img className="body-image1" src="/Frame.png" alt="body" />
                <img className="body-image3" src="/glass.png" alt="body" />
            </div>
            <HealthStatus />
        </div>
    );
};

export default AnatomySection;