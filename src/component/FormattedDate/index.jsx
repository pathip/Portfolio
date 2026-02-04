const FormattedDate = ({isHighLight ,children}) => {
    return (
        <div className="text-2xl">
            <span className={`text-sm ${isHighLight ? "text-[#FA3811]" : ""}`}>
                {children}
            </span>
        </div>
    )
}

export default FormattedDate;