<!-- iframe -->
					<div class="iframe-list">

						<div class="toolbar-option toolbar-select"
							data-option-type="iframe-type" style="heigh: 82px;">
							<h4 class="toolbar-option-label">iframe</h4>
							<div class="toolbar-select-trigger">
								<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="32"
									height="32" preserveAspectRatio="xMidYMid" viewBox="0 0 32 32">
                                    <rect width="32" height="32"
										fill="#ffffff"></rect></svg>
							</div>
						</div>

						<div class="toolbar-option toolbar-divider"
							data-option-type="divider"></div>

						<div class="toolbar-option toolbar-color"
							data-option-type="iframe-color">
							<h4 class="toolbar-option-label">COLOR</h4>
							<div class="toolbar-color-trigger">
								<input class="iframe-colorinput" type="color">
								<div class="toolbar-color-reset icon i-undo"
									data-tooltip="Use default color" data-tooltip-delay="500"></div>
							</div>
						</div>

						<div class="toolbar-option toolbar-divider"
							data-option-type="divider"></div>

						<div class="toolbar-option toolbar-range"
							data-option-type="opacity">
							<h4 class="toolbar-option-label">OPACITY</h4>
							<div class="range">
								<input class="iframe opacity size-box" type=number value=1.00>
								<input class="iframe opacity size-scroll" type=range min="0" max="1.00"
									step="0.1">
							</div>
						</div>

						<div class="toolbar-option toolbar-divider"
							data-option-type="divider"></div>


						<div class="toolbar-option toolbar-group"
							data-group-type="border-css">
							<div class="iframe-toolbar-group-trigger-border">
								<h4 class="toolbar-option-label">
									Border <input type="checkbox" class="iframe-checkbox">
								</h4>
							</div>
							<div class="iframe-toolbar-group-options-border">
								<div class="iframe-toolbar-group-options-inner">
									<div class="toolbar-option toolbar-stepper"
										data-option-type="border-width">
										<h4 class="toolbar-option-label">WIDTH</h4>
										<div class="stepper">
											<input type="iframe border-width size-box" class="stepper-number">
										</div>
									</div>
									<div class="toolbar-option toolbar-color"
										data-option-type="border-color">
										<h4 class="toolbar-option-label">COLOR</h4>
										<div class="toolbar-color-trigger">

											<input class="iframe-border-colorinput" type="color">
											<div class="toolbar-color-reset icon i-undo"
												data-tooltip="Use default color" data-tooltip-delay="500"></div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="toolbar-option toolbar-divider"
							data-option-type="divider"></div>

						<div class="toolbar-option toolbar-group"
							data-group-type="border-css">
							<div class="iframe-toolbar-group-trigger-link">
								<h4 class="toolbar-option-label">
									LINK <input type="checkbox" class="iframe-checkbox">
								</h4>
							</div>
							<div class="iframe-toolbar-group-options-link">
								<div class="iframe-toolbar-group-options-inner">
									<div class="toolbar-option toolbar-stepper"
										data-option-type="border-width">
										<div class="stepper">
											<input type="iframe" class="stepper-number"
												placeholder="http://">
										</div>
									</div>
								</div>
							</div>
						</div>


						<div class="toolbar-option toolbar-divider"
							data-option-type="divider"></div>


						<div class="toolbar-option toolbar-multi"
							data-option-type="block-depth" data-number-of-items="2">
							<h4 class="toolbar-option-label">Depth</h4>
							<div class="toolbar-multi-inner">
								<div class="toolbar-multi-item" data-value="back"
									data-tooltip="Move to back">
									<i class="fa fa-arrow-down fa-2x"></i>
								</div>
								<div class="toolbar-multi-item" data-value="front"
									data-tooltip="Move to front">
									<i class="fa fa-arrow-up fa-2x"></i>
								</div>
							</div>
						</div>
						<div class="toolbar-option toolbar-multi"
							data-option-type="block-actions" data-number-of-items="3">
							<h4 class="toolbar-option-label">Actions</h4>
							<div class="toolbar-multi-inner">
								<div class="toolbar-multi-item" data-value="html"
									data-tooltip="Edit HTML">
									<i class="fa fa-edit fa-2x"></i>
								</div>
								<div class="toolbar-multi-item" data-value="duplicate"
									data-tooltip="Duplicate">
									<i class="fa fa-clipboard fa-2x"></i>
								</div>
								<div class="toolbar-multi-item" data-value="delete"
									data-tooltip="Delete">
									<i class="fa fa-trash fa-2x"></i>
								</div>
							</div>
						</div>
					</div>
