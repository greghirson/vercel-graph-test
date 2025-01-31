
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-31 04:00:00", "b": 460.6}, {"a": "2025-01-31 04:05:00", "b": 456.75}, {"a": "2025-01-31 04:10:00", "b": 446.75}, {"a": "2025-01-31 04:15:00", "b": 449.5}, {"a": "2025-01-31 04:20:00", "b": 462.2}, {"a": "2025-01-31 04:25:00", "b": 485.75}, {"a": "2025-01-31 04:30:00", "b": 486.0}, {"a": "2025-01-31 04:35:00", "b": 477.4}, {"a": "2025-01-31 04:40:00", "b": 465.6}, {"a": "2025-01-31 04:45:00", "b": 463.8}, {"a": "2025-01-31 04:50:00", "b": 471.0}, {"a": "2025-01-31 04:55:00", "b": 458.5}, {"a": "2025-01-31 05:00:00", "b": 459.8}, {"a": "2025-01-31 05:05:00", "b": 462.8}, {"a": "2025-01-31 05:10:00", "b": 464.6}, {"a": "2025-01-31 05:15:00", "b": 464.5}, {"a": "2025-01-31 05:20:00", "b": 451.5}, {"a": "2025-01-31 05:25:00", "b": 449.2}, {"a": "2025-01-31 05:30:00", "b": 452.8}, {"a": "2025-01-31 05:35:00", "b": 447.0}, {"a": "2025-01-31 05:40:00", "b": 427.2}, {"a": "2025-01-31 05:45:00", "b": 418.8}, {"a": "2025-01-31 05:50:00", "b": 434.0}, {"a": "2025-01-31 05:55:00", "b": 430.2}, {"a": "2025-01-31 06:00:00", "b": 436.4}, {"a": "2025-01-31 06:05:00", "b": 482.25}, {"a": "2025-01-31 06:10:00", "b": 479.8}, {"a": "2025-01-31 06:15:00", "b": 459.8}, {"a": "2025-01-31 06:20:00", "b": 443.0}, {"a": "2025-01-31 06:25:00", "b": 456.4}, {"a": "2025-01-31 06:30:00", "b": 452.5}, {"a": "2025-01-31 06:35:00", "b": 455.2}, {"a": "2025-01-31 06:40:00", "b": 449.4}, {"a": "2025-01-31 06:45:00", "b": 465.8}, {"a": "2025-01-31 06:50:00", "b": 461.75}, {"a": "2025-01-31 06:55:00", "b": 445.0}, {"a": "2025-01-31 07:00:00", "b": 451.0}, {"a": "2025-01-31 07:05:00", "b": 452.2}, {"a": "2025-01-31 07:10:00", "b": 463.75}, {"a": "2025-01-31 07:15:00", "b": 499.8}, {"a": "2025-01-31 07:20:00", "b": 499.0}, {"a": "2025-01-31 07:25:00", "b": 506.0}, {"a": "2025-01-31 07:30:00", "b": 543.4}, {"a": "2025-01-31 07:35:00", "b": 560.2}, {"a": "2025-01-31 07:40:00", "b": 584.2}, {"a": "2025-01-31 07:45:00", "b": 623.0}, {"a": "2025-01-31 07:50:00", "b": 623.6}, {"a": "2025-01-31 07:55:00", "b": 551.0}, {"a": "2025-01-31 08:00:00", "b": 561.0}, {"a": "2025-01-31 08:05:00", "b": 536.0}, {"a": "2025-01-31 08:10:00", "b": 547.8}, {"a": "2025-01-31 08:15:00", "b": 543.8}, {"a": "2025-01-31 08:20:00", "b": 530.6}, {"a": "2025-01-31 08:25:00", "b": 532.2}, {"a": "2025-01-31 08:30:00", "b": 527.25}, {"a": "2025-01-31 08:35:00", "b": 533.6}, {"a": "2025-01-31 08:40:00", "b": 538.0}, {"a": "2025-01-31 08:45:00", "b": 533.3333333333334}, {"a": "2025-01-31 08:50:00", "b": 541.6}, {"a": "2025-01-31 08:55:00", "b": 539.5}, {"a": "2025-01-31 09:00:00", "b": 538.4}, {"a": "2025-01-31 09:05:00", "b": 526.75}, {"a": "2025-01-31 09:10:00", "b": 536.8}, {"a": "2025-01-31 09:15:00", "b": 543.2}, {"a": "2025-01-31 09:20:00", "b": 531.8}, {"a": "2025-01-31 09:25:00", "b": 548.0}, {"a": "2025-01-31 09:30:00", "b": 539.0}, {"a": "2025-01-31 09:35:00", "b": 530.75}, {"a": "2025-01-31 09:40:00", "b": 531.2}, {"a": "2025-01-31 09:45:00", "b": 527.75}, {"a": "2025-01-31 09:50:00", "b": 511.8}, {"a": "2025-01-31 09:55:00", "b": 502.2}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    