
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-04-12 04:00:00", "b": 414.2}, {"a": "2025-04-12 04:05:00", "b": 437.8}, {"a": "2025-04-12 04:10:00", "b": 452.8}, {"a": "2025-04-12 04:15:00", "b": 442.0}, {"a": "2025-04-12 04:20:00", "b": 442.5}, {"a": "2025-04-12 04:25:00", "b": 443.8}, {"a": "2025-04-12 04:30:00", "b": 537.75}, {"a": "2025-04-12 04:35:00", "b": 633.0}, {"a": "2025-04-12 04:40:00", "b": 521.0}, {"a": "2025-04-12 04:45:00", "b": 479.4}, {"a": "2025-04-12 04:50:00", "b": 464.75}, {"a": "2025-04-12 04:55:00", "b": 448.2}, {"a": "2025-04-12 05:00:00", "b": 437.6}, {"a": "2025-04-12 05:05:00", "b": 421.8}, {"a": "2025-04-12 05:10:00", "b": 418.25}, {"a": "2025-04-12 05:15:00", "b": 425.0}, {"a": "2025-04-12 05:20:00", "b": 441.8}, {"a": "2025-04-12 05:25:00", "b": 440.6}, {"a": "2025-04-12 05:30:00", "b": 441.2}, {"a": "2025-04-12 05:35:00", "b": 437.8}, {"a": "2025-04-12 05:40:00", "b": 432.2}, {"a": "2025-04-12 05:45:00", "b": 445.6}, {"a": "2025-04-12 05:50:00", "b": 444.5}, {"a": "2025-04-12 05:55:00", "b": 455.3333333333333}, {"a": "2025-04-12 06:00:00", "b": 456.25}, {"a": "2025-04-12 06:05:00", "b": 445.25}, {"a": "2025-04-12 06:10:00", "b": 453.0}, {"a": "2025-04-12 06:15:00", "b": 459.5}, {"a": "2025-04-12 06:20:00", "b": 460.0}, {"a": "2025-04-12 06:25:00", "b": 457.2}, {"a": "2025-04-12 06:30:00", "b": 447.0}, {"a": "2025-04-12 06:35:00", "b": 441.8}, {"a": "2025-04-12 06:40:00", "b": 454.2}, {"a": "2025-04-12 06:45:00", "b": 460.0}, {"a": "2025-04-12 06:50:00", "b": 454.4}, {"a": "2025-04-12 06:55:00", "b": 453.0}, {"a": "2025-04-12 07:00:00", "b": 465.6}, {"a": "2025-04-12 07:05:00", "b": 464.25}, {"a": "2025-04-12 07:10:00", "b": 469.0}, {"a": "2025-04-12 07:15:00", "b": 466.0}, {"a": "2025-04-12 07:20:00", "b": 476.75}, {"a": "2025-04-12 07:25:00", "b": 475.6}, {"a": "2025-04-12 07:30:00", "b": 466.0}, {"a": "2025-04-12 07:35:00", "b": 468.0}, {"a": "2025-04-12 07:40:00", "b": 448.6}, {"a": "2025-04-12 07:45:00", "b": 438.0}, {"a": "2025-04-12 07:50:00", "b": 444.2}, {"a": "2025-04-12 07:55:00", "b": 465.0}, {"a": "2025-04-12 08:00:00", "b": 461.0}, {"a": "2025-04-12 08:05:00", "b": 473.4}, {"a": "2025-04-12 08:10:00", "b": 485.4}, {"a": "2025-04-12 08:15:00", "b": 474.6666666666667}, {"a": "2025-04-12 08:20:00", "b": 469.8}, {"a": "2025-04-12 08:25:00", "b": 475.2}, {"a": "2025-04-12 08:30:00", "b": 487.5}, {"a": "2025-04-12 08:35:00", "b": 497.0}, {"a": "2025-04-12 08:40:00", "b": 488.6}, {"a": "2025-04-12 08:45:00", "b": 483.4}, {"a": "2025-04-12 08:50:00", "b": 491.25}, {"a": "2025-04-12 08:55:00", "b": 507.0}, {"a": "2025-04-12 09:00:00", "b": 503.6}, {"a": "2025-04-12 09:05:00", "b": 522.6}, {"a": "2025-04-12 09:10:00", "b": 580.8}, {"a": "2025-04-12 09:15:00", "b": 577.6}, {"a": "2025-04-12 09:20:00", "b": 575.6666666666666}, {"a": "2025-04-12 09:25:00", "b": 580.8}, {"a": "2025-04-12 09:30:00", "b": 586.0}, {"a": "2025-04-12 09:35:00", "b": 588.6}, {"a": "2025-04-12 09:40:00", "b": 586.5}, {"a": "2025-04-12 09:45:00", "b": 601.4}, {"a": "2025-04-12 09:50:00", "b": 540.0}, {"a": "2025-04-12 09:55:00", "b": 538.4}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    