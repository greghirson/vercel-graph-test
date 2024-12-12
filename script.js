
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-12-12 04:00:00", "b": 450.6}, {"a": "2024-12-12 04:05:00", "b": 476.0}, {"a": "2024-12-12 04:10:00", "b": 552.0}, {"a": "2024-12-12 04:15:00", "b": 554.8}, {"a": "2024-12-12 04:20:00", "b": 528.2}, {"a": "2024-12-12 04:25:00", "b": 491.4}, {"a": "2024-12-12 04:30:00", "b": 468.25}, {"a": "2024-12-12 04:35:00", "b": 457.0}, {"a": "2024-12-12 04:40:00", "b": 461.8}, {"a": "2024-12-12 04:45:00", "b": 463.8}, {"a": "2024-12-12 04:50:00", "b": 452.0}, {"a": "2024-12-12 04:55:00", "b": 450.5}, {"a": "2024-12-12 05:00:00", "b": 449.75}, {"a": "2024-12-12 05:05:00", "b": 454.25}, {"a": "2024-12-12 05:10:00", "b": 456.3333333333333}, {"a": "2024-12-12 05:15:00", "b": 455.4}, {"a": "2024-12-12 05:20:00", "b": 472.25}, {"a": "2024-12-12 05:25:00", "b": 468.0}, {"a": "2024-12-12 05:30:00", "b": 449.4}, {"a": "2024-12-12 05:35:00", "b": 454.6}, {"a": "2024-12-12 05:40:00", "b": 459.75}, {"a": "2024-12-12 05:45:00", "b": 461.75}, {"a": "2024-12-12 05:50:00", "b": 464.25}, {"a": "2024-12-12 05:55:00", "b": 463.6666666666667}, {"a": "2024-12-12 06:00:00", "b": 452.0}, {"a": "2024-12-12 06:05:00", "b": 436.4}, {"a": "2024-12-12 06:10:00", "b": 443.2}, {"a": "2024-12-12 06:15:00", "b": 443.6666666666667}, {"a": "2024-12-12 06:20:00", "b": 441.6}, {"a": "2024-12-12 06:25:00", "b": 443.5}, {"a": "2024-12-12 06:30:00", "b": 429.0}, {"a": "2024-12-12 06:35:00", "b": 422.4}, {"a": "2024-12-12 06:40:00", "b": 432.8}, {"a": "2024-12-12 06:45:00", "b": 444.75}, {"a": "2024-12-12 06:50:00", "b": 449.0}, {"a": "2024-12-12 06:55:00", "b": 459.4}, {"a": "2024-12-12 07:00:00", "b": 458.5}, {"a": "2024-12-12 07:05:00", "b": 481.25}, {"a": "2024-12-12 07:10:00", "b": 487.8}, {"a": "2024-12-12 07:15:00", "b": 505.2}, {"a": "2024-12-12 07:20:00", "b": 507.75}, {"a": "2024-12-12 07:25:00", "b": 521.75}, {"a": "2024-12-12 07:30:00", "b": 577.0}, {"a": "2024-12-12 07:35:00", "b": 572.0}, {"a": "2024-12-12 07:40:00", "b": 575.8}, {"a": "2024-12-12 07:45:00", "b": 591.8}, {"a": "2024-12-12 07:50:00", "b": 596.0}, {"a": "2024-12-12 07:55:00", "b": 596.6}, {"a": "2024-12-12 08:00:00", "b": 612.6}, {"a": "2024-12-12 08:05:00", "b": 626.6}, {"a": "2024-12-12 08:10:00", "b": 648.0}, {"a": "2024-12-12 08:15:00", "b": 637.5}, {"a": "2024-12-12 08:20:00", "b": 636.5}, {"a": "2024-12-12 08:25:00", "b": 618.0}, {"a": "2024-12-12 08:30:00", "b": 586.0}, {"a": "2024-12-12 08:35:00", "b": 587.4}, {"a": "2024-12-12 08:40:00", "b": 567.8}, {"a": "2024-12-12 08:45:00", "b": 551.8}, {"a": "2024-12-12 08:50:00", "b": 541.0}, {"a": "2024-12-12 08:55:00", "b": 538.25}, {"a": "2024-12-12 09:00:00", "b": 534.25}, {"a": "2024-12-12 09:05:00", "b": 524.0}, {"a": "2024-12-12 09:10:00", "b": 516.8}, {"a": "2024-12-12 09:15:00", "b": 521.25}, {"a": "2024-12-12 09:20:00", "b": 507.2}, {"a": "2024-12-12 09:25:00", "b": 487.0}, {"a": "2024-12-12 09:30:00", "b": 497.0}, {"a": "2024-12-12 09:35:00", "b": 495.8}, {"a": "2024-12-12 09:40:00", "b": 482.0}, {"a": "2024-12-12 09:45:00", "b": 481.4}, {"a": "2024-12-12 09:50:00", "b": 484.4}, {"a": "2024-12-12 09:55:00", "b": 479.2}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    