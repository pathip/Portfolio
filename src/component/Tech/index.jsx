const Tech = ({ isHighLight, data }) => {
    return (
        <div>
            <div className="flex gap-3 text-sm">
                {
                    data.map((e, i) => (
                        <div key={`${e}-tech-${i}`} className={`bg-[#DB4123] px-2 py-1 rounded-md ${isHighLight ? "text-[#F2EDF5]" : ""}`}>{e}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default Tech;