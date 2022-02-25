#!/bin/sh

for i in $(find ./src/components -name "*.scss"); do
  sed -i 's/var(--basic-primary)/var(--primary-60-main)/g' $i
  sed -i 's/var(--basic-secondary)/var(--neutral-90)/g' $i
  sed -i 's/var(--basic-tertiary)/var(--neutral-50)/g' $i
  sed -i 's/var(--basic-hover)/var(--primary-70)/g' $i
  sed -i 's/var(--basic-press)/var(--primary-80)/g' $i
  sed -i 's/var(--basic-disable)/var(--neutral-30)/g' $i
  sed -i 's/var(--basic-primary-light)/var(--primary-40)/g' $i

  sed -i 's/var(--background-primary)/var(--neutral-00)/g' $i
  sed -i 's/var(--background-secondary)/var(--neutral-05)/g' $i
  sed -i 's/var(--background-tertiary)/var(--neutral-10)/g' $i
  sed -i 's/var(--background-tertiary-hover)/var(--neutral-20)/g' $i
  sed -i 's/var(--background-card)/var(--neutral-00)/g' $i
  sed -i 's/var(--background-card-hover)/var(--elevated-bg)/g' $i
  sed -i 's/var(--background-inversion)/var(--neutral-90)/g' $i
  sed -i 's/var(--background-shadow)/var(--neutral-50)/g' $i
  sed -i 's/var(--background-header)/var(--primary-80)/g' $i
  sed -i 's/var(--background-danger)/var(--error-10)/g' $i
  sed -i 's/var(--background-warn)/var(--warning-10)/g' $i
  sed -i 's/var(--background-success)/var(--success-10)/g' $i

  sed -i 's/var(--text-primary)/var(--neutral-90)/g' $i
  sed -i 's/var(--text-secondary)/var(--neutral-50)/g' $i
  sed -i 's/var(--text-tertiary)/var(--neutral-30)/g' $i
  sed -i 's/var(--text-inversion)/var(--neutral-00)/g' $i
  sed -i 's/var(--text-static-white)/var(--static-white)/g' $i
  sed -i 's/var(--text-static-black)/var(--dark-static-neutral-00)/g' $i

  sed -i 's/var(--status-warn)/var(--warning-50-main)/g' $i
  sed -i 's/var(--status-warn-hover)/var(--warning-60)/g' $i
  sed -i 's/var(--status-warn-press)/var(--warning-70)/g' $i
  sed -i 's/var(--status-success)/var(--success-50-main)/g' $i
  sed -i 's/var(--status-success-hover)/var(--success-60)/g' $i
  sed -i 's/var(--status-success-press)/var(--success-70)/g' $i
  sed -i 's/var(--status-danger)/var(--error-60-main)/g' $i
  sed -i 's/var(--status-danger-hover)/var(--error-70)/g' $i
  sed -i 's/var(--status-danger-press)/var(--error-80)/g' $i

  sed -i 's/var(--special-blue)/var(--primary-50)/g' $i
  sed -i 's/var(--special-softBlue)/var(--cyan-10)/g' $i
  sed -i 's/var(--special-lightBlue)/var(--cyan-40)/g' $i
  sed -i 's/var(--special-softLightBlue)/var(--cyan-10)/g' $i
  sed -i 's/var(--special-turquoise)/var(--teal-30)/g' $i
  sed -i 's/var(--special-softTurquoise)/var(--teal-10)/g' $i
  sed -i 's/var(--special-green)/var(--success-40)/g' $i
  sed -i 's/var(--special-softGreen)/var(--success-10)/g' $i
  sed -i 's/var(--special-yellow)/var(--attention-40)/g' $i
  sed -i 's/var(--special-softYellow)/var(--attention-10)/g' $i
  sed -i 's/var(--special-red)/var(--error-50)/g' $i
  sed -i 's/var(--special-softRed)/var(--error-10)/g' $i
  sed -i 's/var(--special-magenta)/var(--magenta-40)/g' $i
  sed -i 's/var(--special-softMagenta)/var(--magenta-10)/g' $i
  sed -i 's/var(--special-purple)/var(--purple-50)/g' $i
  sed -i 's/var(--special-softPurple)/var(--purple-10)/g' $i
  sed -i 's/var(--special-violet)/var(--purple-40)/g' $i
  sed -i 's/var(--special-softViolet)/var(--purple-20)/g' $i
  sed -i 's/var(--special-gray)/var(--neutral-30)/g' $i
  sed -i 's/var(--special-softGray)/var(--neutral-05)/g' $i
done