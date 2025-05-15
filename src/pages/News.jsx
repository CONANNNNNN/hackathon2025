export default function News() {
    return (
        <div>
            {/* 最新情報 */}
            <a id="information-anchor" className="anchor"></a>
            <h2 className="border-accent mx-auto my-5 py-1 font-weight-bold text-center">
                <i className="lg fas fa-info-circle fa-lg" aria-hidden="true"></i>
                <br />
                " 最新情報 "
            </h2>
                <div class="card">
            <div class="card-header d-flex flex-row bd-highlight mb-3">
                <div class="mr-5 text-primary">
                <h5>2025/05/26</h5>
                </div>
                <div class="text-primary"><h5>新歓食事会</h5></div>
            </div>
            <div class="card-body">
                <p class="card-title">
                19:00~　池袋にて新歓食事会を行います！新入生は1人400円で参加可能です！
                </p>
            </div>
        </div>
        </div>
    );
}

