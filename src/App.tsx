import * as React from 'react';
import './App.css';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';




function App() {
  const [alignment, setAlignment] = React.useState<string | null>('left');
  const [alignmentCurrency, setAlignmentCurrency] = React.useState<string | null>('eth');

  const handleAlignmentCurrency = (
    event: React.MouseEvent<HTMLElement>,
    newAlignmentCurrency: string | null,
  ) => {
    setAlignmentCurrency(newAlignmentCurrency);
  };

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <div className="App">
      <div className="title">
        <h1>Trade Options</h1>

      </div>
      <div className="option-type">
        <p>Option Type:</p>
            <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
          >
            <ToggleButton value="left" aria-label="left aligned">Call
            </ToggleButton>
            <ToggleButton value="right" aria-label="right aligned">Put
            </ToggleButton>
          </ToggleButtonGroup>
      </div>
      <div className="option-currency">
        <p>Option Currency:</p>
        <ToggleButtonGroup
            value={alignmentCurrency}
            exclusive
            onChange={handleAlignmentCurrency}
            aria-label="text alignment"
          >
            <ToggleButton value="eth" aria-label="left aligned">ETH
            </ToggleButton>
            <ToggleButton value="wbtc" aria-label="right aligned">WBTC
            </ToggleButton>
          </ToggleButtonGroup>
      </div>
      <div className="size">
        <p>Size:</p>
        <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
            <TextField
            id="filled-number"
            label="ETH"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
        </Box>
      </div>
      <div className="period">
        <p>Period:</p>
        <Box width={200}>
          <Slider min={7} max={45} defaultValue={30} aria-label="Period" valueLabelDisplay="auto" />
        </Box>
      </div>
      <div className="allstats">
        <p>Strike Price:</p>
        <p>Price to Break-even:</p>
        <p>Total cost:</p>
        <p>Cost/Hour:</p>
      </div>
      <div className="profit-calculator">
        <p>Profit calculator</p>
        <Box width={400}>
          <Slider min={-50} max={50} defaultValue={30} aria-label="Profit" valueLabelDisplay="auto" />
        </Box>
      </div>
      <div className="Confirmation">
        <p>Confirmation</p>
      </div>
    </div>
  );
};

export default App;
