import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Payment = React.lazy(() => import("./pages/Payment"));

const Completion = React.lazy(() => import("./pages/Completion"));

const ProjectRoutes = () => {
    return (<React.Suspense fallback={<>Loading...</>}>
        <Router>
            <Routes>
                <Route path="/" element={<Payment />} />
                <Route path="/completion" element={<Completion />} />
            </Routes>
        </Router>
    </React.Suspense>)
}

export default ProjectRoutes;