import { useState } from "react";
import { motion } from "framer-motion";
import Heading from "./Heading";
import Tabs from "./Tabs";
import TabsPanel from "./TabsPanel";
import Image from "next/image";
import img from "@assets/images/cta-shape.png";

const containerVariant = {
	hidden: { opacity: 0, y: 100 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { ease: "easeIn", duration: 1.5, staggerChildren: 0.3 },
	},
};

function Work() {
	const [activeTab, setActiveTab] = useState("tab-0");

	const changeTab = (id) => {
		id && setActiveTab(id);
	};

	return (
		<motion.section
			id="work"
			className="jobs"
			variants={containerVariant}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.2 }}
		>
			<Heading name="job" number="02." title="Where I've Worked" />

			<div className="jobs-content">
				<div role="tablist" aria-label="Job tabs" className="tablist">
					<Tabs
						activeTab={activeTab}
						onClick={() => changeTab("tab-0")}
						id="tab-0"
						idx={0}
						title="Qataloog"
					/>
					<Tabs
						activeTab={activeTab}
						onClick={() => changeTab("tab-1")}
						id="tab-1"
						idx={1}
						title="Akara"
					/>
					<Tabs
						activeTab={activeTab}
						onClick={() => changeTab("tab-2")}
						id="tab-2"
						idx={2}
						title="Aussiecare Staffing"
					/>
					<Tabs
						activeTab={activeTab}
						onClick={() => changeTab("tab-3")}
						id="tab-3"
						idx={3}
						title="iauconsultingservices"
					/>
					<Tabs
						activeTab={activeTab}
						onClick={() => changeTab("tab-4")}
						id="tab-4"
						idx={4}
						title="Freelancer"
					/>
					<div className="activeTab-indicator"></div>
				</div>

				<div className="jobs-panels">
					<TabsPanel activeTab={activeTab} id="tab-0" idx="0" />
					<TabsPanel activeTab={activeTab} id="tab-1" idx="1" />
					<TabsPanel activeTab={activeTab} id="tab-2" idx="2" />
					<TabsPanel activeTab={activeTab} id="tab-3" idx="3" />
					<TabsPanel activeTab={activeTab} id="tab-4" idx="4" />
				</div>
			</div>

			<Image src={img} alt="" className="layout-img" />
		</motion.section>
	);
}

export default Work;
