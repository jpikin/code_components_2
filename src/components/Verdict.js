export default function Verdict({ temp }) {

    const calkTemp = () => {
        if (!isNaN(parseFloat(temp))) {
            if (temp <= 0) return <span>Лёд</span>
            else if (temp >= 1 && temp < 100) return <span>Вода</span>
            else if (temp >= 100) return <span>Пар</span>
        }
        else return <span></span>
    }

    return (
        <p>
            {calkTemp()}
        </p>
    );
}
