import React from 'react';

function Layout({children}) {
    return (
        <>
            <main className="reactChatLayout">
                {children}
            </main>
        </>
    );
}

export default Layout;
