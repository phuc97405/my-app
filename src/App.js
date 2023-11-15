import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const inputSearchRef = useRef(null);
  const widthImage =
    windowSize.innerWidth < 500
      ? windowSize.innerWidth - 40
      : (windowSize.innerWidth - 80) / 3;
  function handleWindowResize() {
    setWindowSize(getWindowSize());
  }
  useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const data = [
    {
      title: "Up To Top",
      type: ["technology", "hi", "Al"],
      view: 28,
      comment: 94,
      vote: 12,
      img: "https://kr.object.ncloudstorage.com/dev-pixelai-bucket/pixelai/8ea78310-6ca1-4f1c-9195-364fdb321f95.jpg",
    },
    {
      title: "Go To The Moon",
      type: ["good", "go go", "Al"],
      view: 346,
      comment: 34,
      vote: 235,
      img: "https://kr.object.ncloudstorage.com/dev-pixelai-bucket/pixelai/9ad160f3-4a7f-478a-93ea-f629776e69ea.jpg",
    },
    {
      title: "Hello",
      type: ["android", "okey", "Al"],
      view: 3,
      comment: 76,
      vote: 56,
      img: "https://kr.object.ncloudstorage.com/dev-pixelai-bucket/pixelai/399af999-72be-44cd-a011-316470fe867f.jpeg",
    },
  ];

  const renderItem = (i, index) => (
    <div
      key={index}
      className="item-image"
      style={{
        position: "relative",
        width: "100%",
        minHeight: 150,
        minWidth: 200,
      }}
    >
      <img className="img-item" src={i.img} />
      <div className="view-label-item">
        <div className="title-item">{i.title} </div>
        <div className="suggest-type-item">
          {i.type.map((t, n) => (
            <span key={n} className="view-recent-search">
              <div className="keyword-recent">{t}</div>
            </span>
          ))}
        </div>

        <div className="statistics">
          <span className="view-comment">
            <img
              className="img-view"
              src="https://pixelai.kr/assets/eye-b5e81bae.svg"
            />
            <div className="label-stastic">{i.view}</div>
            <img
              className="img-view"
              src="https://pixelai.kr/assets/message-dot-582b7ea5.svg"
            />
            <div className="label-stastic">{i.comment}</div>
          </span>
          <span className="vote">
            <img
              className="img-view"
              src="https://pixelai.kr/assets/star-icon-cb9b9219.svg"
            />
            <div className="label-stastic">투표수{i.vote}</div>
          </span>
        </div>
      </div>
      <img
        style={{
          position: "absolute",
          right: 0,
          bottom: windowSize.innerWidth > 500 ? "30%" : "21%",
        }}
        className="img-rank"
        src="https://pixelai.kr/assets/hottopic-icon1-b83a2c3e.svg"
      />
    </div>
  );

  const renderItemTwoColumn = (i, index) => (
    <div key={index} className="item-image-row">
      <img className="img-item-row" src={i.img} />
      <div className="view-label-item-row">
        <span className="group-text-subtext">
          <div style={{ color: "green", marginBottom: 8 }}>Al </div>
          <div className="title-item-row">{i.title} </div>
          <div className="input-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint
          </div>
        </span>

        <div className="suggest-type-item">
          {i.type.map((t, n) => (
            <span key={n} className="view-recent-search">
              <div className="keyword-recent">{t}</div>
            </span>
          ))}
        </div>

        <div className="statistics">
          <span className="view-comment">
            <img
              className="img-view"
              src="https://pixelai.kr/assets/eye-b5e81bae.svg"
            />
            <div className="label-stastic">{i.view}</div>
            <img
              className="img-view"
              src="https://pixelai.kr/assets/message-dot-582b7ea5.svg"
            />
            <div className="label-stastic">{i.comment}</div>
          </span>
          <span className="vote">
            <img
              className="img-view"
              src="https://pixelai.kr/assets/star-icon-cb9b9219.svg"
            />
            <div className="label-stastic">투표수{i.vote}</div>
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <header className="App-header">
        <div className="containerTop">
          <div className="columnLeft">
            <img
              src="https://pixelai.kr/assets/logo-a14d3898.svg"
              style={{ marginRight: 30 }}
            />
            {windowSize.innerWidth > 900 && (
              <span>
                <div className="Label-p">커뮤니티</div>
                <div className="Label-p">고객센터</div>
              </span>
            )}
          </div>

          <div className="columnRight">
            <a
              onClick={() => {
                const headerElement = document.getElementById("header-id");
                headerElement.hidden = !headerElement.hidden;
              }}
              className="btn btn-primary"
            >
              <img
                className="img-search"
                src="https://pixelai.kr/assets/search-f197451b.svg"
              />
            </a>
            {windowSize.innerWidth < 900 ? (
              <div className="Label-p">커뮤니티 등록하기</div>
            ) : (
              <span>
                <div className="Label-p">커뮤니티 등록하기</div>
                <div className="Label-p">고객센터</div>
              </span>
            )}
          </div>
        </div>
        <div className="root-header" id="header-id">
          <div className="container-search">
            <span className="box-search">
              <img
                className="img-search"
                src="https://pixelai.kr/assets/search-f197451b.svg"
              />
              <input
                ref={inputSearchRef}
                placeholder="어떤 관심사를 찾고 계시나요?"
                type="text"
                className="placeholder-text"
              />
            </span>

            <a
              onClick={() => {
                const headerElement = document.getElementById("header-id");
                headerElement.hidden = !headerElement.hidden;
              }}
              className="btn btn-primary"
            >
              {windowSize.innerWidth > 900 && (
                <img
                  className="img-search"
                  src="https://pixelai.kr/assets/close-background-2bdc3599.svg"
                />
              )}
            </a>
          </div>

          <div className="suggest-text-search">
            <div className="text-suggest">인기검색어</div>
            <span className="list-recent">
              <a
                onClick={() => {
                  inputSearchRef.current.value = "hehe";
                }}
                className="view-recent-search"
              >
                <div className="keyword-recent">hehe</div>
              </a>
              <a
                onClick={() => {
                  inputSearchRef.current.value = "test";
                }}
                className="view-recent-search"
              >
                <div className="keyword-recent">test</div>
              </a>
              <a
                onClick={() => {
                  inputSearchRef.current.value = "test voice";
                }}
                className="view-recent-search"
              >
                <div className="keyword-recent">test voice</div>
              </a>
            </span>
          </div>
        </div>
      </header>
      <div id="root" className="body">
        <div>
          <div className="label-body">이달의 핫토픽</div>
          <div className="tab-sort">
            <span className="view-recent-search tab-body">
              <div>All</div>
            </span>
            <span className="view-recent-search tab-body">
              <div>Rank</div>
            </span>
            <span className="view-recent-search tab-body">
              <div>New</div>
            </span>
          </div>
          <div className="render-list">
            {data.map((i, index) => renderItem(i, index))}
          </div>
        </div>

        <div className="top-view">
          <div className="label-body">이달의 핫토픽</div>
          <div className="tab-sort">
            <span className="view-recent-search tab-body">
              <div>All</div>
            </span>
            <span className="view-recent-search tab-body">
              <div>Rank</div>
            </span>
            <span className="view-recent-search tab-body">
              <div>New</div>
            </span>
          </div>
          <div className="render-list-two">
            {data.map((i, index) => renderItemTwoColumn(i, index))}
          </div>
        </div>
      </div>
    </>
  );
}
function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

export default App;
