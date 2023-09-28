// Currency Data ----------------------------------------------------------------------
import fetch from 'cross-fetch';

export const getCurrencyConversionData = async () => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
    };
    const response = await fetch(
        'https://openexchangerates.org/api/latest.json?app_id=d4f7c0396a5148fd994260b05bdf5a4a',
        requestOptions
    );
    if (!response.ok) {
        throw new Error('Can not fetch currency data');
    }
    return await response.json();
};

export const getSalary = (amountUSD, currency, currencyData) => {
    const amount =
        currency === 'USD'
            ? amountUSD
            : amountUSD * currencyData.rates[currency];
    const formatter = Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
    });
    return formatter.format(amount);
};