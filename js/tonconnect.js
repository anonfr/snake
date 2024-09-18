const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
    manifestUrl: 'https://violet-binding-sloth-805.mypinata.cloud/ipfs/QmRB9zW7RgnNEVmou2Nx3ofThvj8jGybnopWaehYkQkEQE',
    buttonRootId: 'ton-connect-button',
    uiPreferences: {
        theme: TON_CONNECT_UI.THEME.DARK,
        colorsSet: {
            connectButton: {
                background: '#ff0000',
                foreground: '#ffffff',
            },
        },
    },
});

// Optionally, you can customize the button text
tonConnectUI.uiOptions = {
    language: 'en',
    uiPreferences: {
        text: {
            connectButton: 'Connect Wallet',
        },
    },
};

tonConnectUI.onStatusChange(wallet => {
    if (wallet) {
        console.log('Connected wallet:', wallet.account.address);
        // You can add more functionality here when a wallet is connected
    } else {
        console.log('Wallet disconnected');
        // You can add more functionality here when the wallet is disconnected
    }
});
