
export const HomeSreen = () => {
    return (
        <>
            <section className="banner bg-color-orange">
                <div className="banner__info pl-4">
                    <h1 className="color-white">
                        Welcome to Bistros <br/> healthy <span className="fw-300">Fresh Meals!</span>
                    </h1>
                    <p className="banner__info__schedule color-white"> 
                        Open Everyday - 
                        <span className="fw-600"> 7Am to 10 Pm</span> 
                    </p>
                    <button className="banner__info__button mt-3 color-white">
                        Learn More
                    </button>
                </div>
                <div className="banner__image"></div>
            </section>
        </>
    )
}
