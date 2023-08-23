const TranslateOutput = ({input, sign}) => {
    return(
        <div>
            <aside>
                <img src={sign} alt={input} width="40" />
            </aside>
            <section>
                <p>{input}</p>
            </section>
        </div>
    )

}

export default TranslateOutput;