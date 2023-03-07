import React from 'react';
import './Prices.css';
import btc from './assets/btc.png';
import eth from './assets/eth.png';
import fct from './assets/fct.png';
import usdt from './assets/usdt.png';
import bnb from './assets/bnb.png';

export default function Prices() {
  return (
    <div className="prices">
      <h2>COIN-MARKET CAP</h2>
      <table>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Name</th>
            <th>Price</th>
            <th>Last 24H</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="serialNum">1</td>
            <td className="coinName">
              <img src={btc} alt="" className="coinLogo" />
              <div className="coinDets">
                <h2>
                  Bitcoin <span>[BTC]</span>
                </h2>
                <h3>
                  Mkt Cap <span>$432.30 B</span>
                </h3>
                <h3>
                  Volume <span>$6.65 B</span>
                </h3>
              </div>
            </td>
            <td className="coinPrice">$22,385.00</td>
          </tr>
          <tr>
            <td className="serialNum">2</td>
            <td className="coinName">
              <img src={eth} alt="" className="coinLogo" />
              <div className="coinDets">
                <h2>
                  Ethereum <span>[ETH]</span>
                </h2>
                <h3>
                  Mkt Cap <span>$191.63 B</span>
                </h3>
                <h3>
                  Volume <span>$929.37 B</span>
                </h3>
              </div>
            </td>
            <td className="coinPrice">$1,565.90</td>
          </tr>
          <tr>
            <td className="serialNum">3</td>
            <td className="coinName">
              <img src={fct} alt="" className="coinLogo" />
              <div className="coinDets">
                <h2>
                  Factom <span>[FCT]</span>
                </h2>
                <h3>
                  Mkt Cap <span>$0</span>
                </h3>
                <h3>
                  Volume <span>$0</span>
                </h3>
              </div>
            </td>
            <td className="coinPrice">$0</td>
          </tr>
          <tr>
            <td className="serialNum">3</td>
            <td className="coinName">
              <img src={usdt} alt="" className="coinLogo" />
              <div className="coinDets">
                <h2>
                  Tether <span>[USDT]</span>
                </h2>
                <h3>
                  Mkt Cap <span>$72.53 B</span>
                </h3>
                <h3>
                  Volume <span>$6.95 B</span>
                </h3>
              </div>
            </td>
            <td className="coinPrice">$1.063</td>
          </tr>
          <tr>
            <td className="serialNum">3</td>
            <td className="coinName">
              <img src={bnb} alt="" className="coinLogo" />
              <div className="coinDets">
                <h2>
                  Binance Coin <span>[BNB]</span>
                </h2>
                <h3>
                  Mkt Cap <span>$48.14 B</span>
                </h3>
                <h3>
                  Volume <span>$95.57 M</span>
                </h3>
              </div>
            </td>
            <td className="coinPrice">$286.32</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
