
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-28 02:00:00", "b": 457.5}, {"a": "2025-01-28 02:05:00", "b": 454.0}, {"a": "2025-01-28 02:10:00", "b": 448.0}, {"a": "2025-01-28 02:15:00", "b": 449.75}, {"a": "2025-01-28 02:20:00", "b": 469.8}, {"a": "2025-01-28 02:25:00", "b": 476.75}, {"a": "2025-01-28 02:30:00", "b": 475.25}, {"a": "2025-01-28 02:35:00", "b": 479.0}, {"a": "2025-01-28 02:40:00", "b": 469.5}, {"a": "2025-01-28 02:45:00", "b": 455.0}, {"a": "2025-01-28 02:50:00", "b": 455.5}, {"a": "2025-01-28 02:55:00", "b": 461.0}, {"a": "2025-01-28 03:00:00", "b": 468.6666666666667}, {"a": "2025-01-28 03:05:00", "b": 464.4}, {"a": "2025-01-28 03:10:00", "b": 456.0}, {"a": "2025-01-28 03:15:00", "b": 455.0}, {"a": "2025-01-28 03:20:00", "b": 449.5}, {"a": "2025-01-28 03:25:00", "b": 446.5}, {"a": "2025-01-28 03:30:00", "b": 446.4}, {"a": "2025-01-28 03:35:00", "b": 444.25}, {"a": "2025-01-28 03:40:00", "b": 447.6}, {"a": "2025-01-28 03:45:00", "b": 453.6}, {"a": "2025-01-28 03:50:00", "b": 440.6}, {"a": "2025-01-28 03:55:00", "b": 440.25}, {"a": "2025-01-28 04:00:00", "b": 434.0}, {"a": "2025-01-28 04:05:00", "b": 446.8}, {"a": "2025-01-28 04:10:00", "b": 445.6}, {"a": "2025-01-28 04:15:00", "b": 430.6}, {"a": "2025-01-28 04:20:00", "b": 443.0}, {"a": "2025-01-28 04:25:00", "b": 442.5}, {"a": "2025-01-28 04:30:00", "b": 435.0}, {"a": "2025-01-28 04:35:00", "b": 438.6}, {"a": "2025-01-28 04:40:00", "b": 469.6}, {"a": "2025-01-28 04:45:00", "b": 494.2}, {"a": "2025-01-28 04:50:00", "b": 496.6}, {"a": "2025-01-28 04:55:00", "b": 479.75}, {"a": "2025-01-28 05:00:00", "b": 488.8}, {"a": "2025-01-28 05:05:00", "b": 492.0}, {"a": "2025-01-28 05:10:00", "b": 483.0}, {"a": "2025-01-28 05:15:00", "b": 483.0}, {"a": "2025-01-28 05:20:00", "b": 487.4}, {"a": "2025-01-28 05:25:00", "b": 498.75}, {"a": "2025-01-28 05:30:00", "b": 502.4}, {"a": "2025-01-28 05:35:00", "b": 518.4}, {"a": "2025-01-28 05:40:00", "b": 536.8}, {"a": "2025-01-28 05:45:00", "b": 529.4}, {"a": "2025-01-28 05:50:00", "b": 519.0}, {"a": "2025-01-28 05:55:00", "b": 531.0}, {"a": "2025-01-28 06:00:00", "b": 527.75}, {"a": "2025-01-28 06:05:00", "b": 523.5}, {"a": "2025-01-28 06:10:00", "b": 525.75}, {"a": "2025-01-28 06:15:00", "b": 519.4}, {"a": "2025-01-28 06:20:00", "b": 531.3333333333334}, {"a": "2025-01-28 06:25:00", "b": 546.0}, {"a": "2025-01-28 06:30:00", "b": 567.6}, {"a": "2025-01-28 06:35:00", "b": 594.2}, {"a": "2025-01-28 06:40:00", "b": 599.25}, {"a": "2025-01-28 06:45:00", "b": 589.0}, {"a": "2025-01-28 06:50:00", "b": 585.4}, {"a": "2025-01-28 06:55:00", "b": 579.0}, {"a": "2025-01-28 07:00:00", "b": 578.25}, {"a": "2025-01-28 07:05:00", "b": 595.4}, {"a": "2025-01-28 07:10:00", "b": 599.0}, {"a": "2025-01-28 07:15:00", "b": 592.3333333333334}, {"a": "2025-01-28 07:20:00", "b": 590.0}, {"a": "2025-01-28 07:25:00", "b": 597.4}, {"a": "2025-01-28 07:30:00", "b": 604.0}, {"a": "2025-01-28 07:35:00", "b": 603.6}, {"a": "2025-01-28 07:40:00", "b": 598.75}, {"a": "2025-01-28 07:45:00", "b": 619.0}, {"a": "2025-01-28 07:50:00", "b": 640.8}, {"a": "2025-01-28 07:55:00", "b": 650.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    