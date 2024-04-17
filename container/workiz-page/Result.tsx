import Image from "next/image";
import {
	after,
	chelengeBg,
	showcase1,
	showcase2,
	showcase3,
	showcase4,
	showcase5,
	showcase6,
} from "@/public";

export default function Result() {
	return (
		<section className="w-full py-[100px]">
			<div className="w-full flex flex-col">
				<h1 className="text-[65px] padding-x leading-[65px] font-medium font-NeueMontreal text-secondry pb-[50px]">
					The Result
				</h1>
				<div className="w-full border-t border-[#21212155] pt-[20px]">
					<div className="w-full flex justify-between gap-[15px] px-[50px]">
						<div>
							<h3 className="text-[20px] leading-[30px] font-medium text-secondry font-NeueMontreal">
								Project Outcomes:
							</h3>
						</div>
						<div className="w-[50%] flex gap-[40px]">
							<div className="flex flex-col gap-y-[20px]">
								<p className="text-[20px] leading-[30px] font-NeueMontreal text-secondry underline">
									Feedback
								</p>
								<p className="text-[20px] leading-[30px] font-NeueMontreal text-secondry">
									“OCHI brought certain level of <br /> professionalism into our
									presentations that
									<br /> we were lacking before. When I showed <br />
									our management and HR teams the <br />
									presentation OCHI developed, they were <br />
									amazed — the final product was exactly <br />
									what we needed to create a better
									<br /> experience for new employees and our <br />
									clients.”
								</p>
							</div>
							<div className="flex flex-col gap-y-[20px]">
								<p className="text-[20px] leading-[30px] font-NeueMontreal text-secondry underline">
									The Result
								</p>
								<p className="text-[20px] leading-[30px] font-NeueMontreal text-secondry">
									We’ve created 10 presentations for Workiz <br /> company which
									improved the on-boarding <br /> process, empowered sales team,
									and just made <br />
									their work easier
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
