import React from 'react';
import './AirQuality.scss'

const AirQualityFrame = () => {
    return(
        <section>
            <h2 className="air-q-iframe-title">Индекс качества воздуха в режиме реального времени</h2>
            <iframe src="https://www.saveecobot.com/maps" className="air-q-iframe" ></iframe>
            <p className="air-q-iframe-text">Для того чтобы узнать уровень загрязнения атмосферного воздуха (качество воздуха) в городе Киев, необходимо выбрать соответствующую станцию мониторинга на карте выше.</p>
        </section>
    )
}

export default AirQualityFrame;