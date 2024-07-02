import { ArrowPathIcon,AcademicCapIcon, ArrowTrendingUpIcon, BellIcon, BoltIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Build Your Own Quizzes with Ease',
    description:
      'Our intuitive quiz creator allows users to design custom quizzes effortlessly. Input questions, multiple-choice answers, and designate the correct answers. ',
    icon: AcademicCapIcon,
  },
  {
    name: 'Instant Feedback',
    description:
      'Take a quiz and receive instant feedback on your performance. See your score and review which questions you got right or wrong, helping you learn and improve.',
    icon: BellIcon,
  },
  {
    name: 'Explore and Enjoy User-Generated Content',
    description:
      'Browse a wide array of quizzes created by other users. Discover new topics, challenge yourself with diverse questions.',
    icon: BoltIcon,
  },
  {
    name: 'Monitor Your Quiz Journey',
    description:
      'Track your quiz-taking progress with detailed statistics and performance metrics. Review past quizzes, see your improvement over time.',
    icon: ArrowTrendingUpIcon,
  },
]

export default function Features() {
  return (
    <div id="feature" className="bg-black/0 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">Deploy faster</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-indigo-300 sm:text-4xl">
            Everything you need to deploy your app
          </p>
          <p className="mt-6 text-lg leading-8 text-white">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-indigo-400">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-white">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
