## Oggi il tuo compito è completare il progetto inserendo indicatori di caricamento, gestione degli errori e redux-persist.

Inserisci nuove azioni e casi nei tuoi reducers per gestire un indicatore di caricamento per operazioni asincrone ed eventuali errori, esattamente come abbiamo fatto in classe. Sfrutta queste proprietà dello store e inserisci nei componenti affetti da caricamenti e/o errori uno Spinner e un Alert per informare l’utente di questi cambi di stato.

Installa il package redux-persist (npm i redux-persist) e aggiungilo al tuo progetto con la configurazione appropriata. Lo scopo è rendere il tuo applicativo capace di non perdere le informazioni dello Store dopo un refresh del browser.

Mantieni intatto il resto delle funzionalità.[EXTRA]
Installa redux-persist-transform-encrypt, critta la tua copia dello Store nel localStorage e salva la secretKey all’interno di un file .env.
