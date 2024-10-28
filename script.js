
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-28 04:00:00", "b": 448.75}, {"a": "2024-10-28 04:05:00", "b": 449.5}, {"a": "2024-10-28 04:10:00", "b": 454.8}, {"a": "2024-10-28 04:15:00", "b": 456.0}, {"a": "2024-10-28 04:20:00", "b": 456.0}, {"a": "2024-10-28 04:25:00", "b": 455.6}, {"a": "2024-10-28 04:30:00", "b": 454.8}, {"a": "2024-10-28 04:35:00", "b": 452.0}, {"a": "2024-10-28 04:40:00", "b": 454.0}, {"a": "2024-10-28 04:45:00", "b": 446.2}, {"a": "2024-10-28 04:50:00", "b": 451.2}, {"a": "2024-10-28 04:55:00", "b": 455.2}, {"a": "2024-10-28 05:00:00", "b": 456.0}, {"a": "2024-10-28 05:05:00", "b": 448.0}, {"a": "2024-10-28 05:10:00", "b": 445.6666666666667}, {"a": "2024-10-28 05:15:00", "b": 449.8}, {"a": "2024-10-28 05:20:00", "b": 450.6}, {"a": "2024-10-28 05:25:00", "b": 454.5}, {"a": "2024-10-28 05:30:00", "b": 461.6}, {"a": "2024-10-28 05:35:00", "b": 452.6}, {"a": "2024-10-28 05:40:00", "b": 449.5}, {"a": "2024-10-28 05:45:00", "b": 454.75}, {"a": "2024-10-28 05:50:00", "b": 474.6}, {"a": "2024-10-28 05:55:00", "b": 467.25}, {"a": "2024-10-28 06:00:00", "b": 459.4}, {"a": "2024-10-28 06:05:00", "b": 468.0}, {"a": "2024-10-28 06:10:00", "b": 456.75}, {"a": "2024-10-28 06:15:00", "b": 454.6}, {"a": "2024-10-28 06:20:00", "b": 461.3333333333333}, {"a": "2024-10-28 06:25:00", "b": 464.0}, {"a": "2024-10-28 06:30:00", "b": 454.0}, {"a": "2024-10-28 06:35:00", "b": 464.8}, {"a": "2024-10-28 06:40:00", "b": 455.0}, {"a": "2024-10-28 06:45:00", "b": 452.6666666666667}, {"a": "2024-10-28 06:50:00", "b": 461.0}, {"a": "2024-10-28 06:55:00", "b": 464.8}, {"a": "2024-10-28 07:00:00", "b": 473.2}, {"a": "2024-10-28 07:05:00", "b": 464.4}, {"a": "2024-10-28 07:10:00", "b": 457.6}, {"a": "2024-10-28 07:15:00", "b": 457.6666666666667}, {"a": "2024-10-28 07:20:00", "b": 451.8}, {"a": "2024-10-28 07:25:00", "b": 451.6}, {"a": "2024-10-28 07:30:00", "b": 471.8}, {"a": "2024-10-28 07:35:00", "b": 480.0}, {"a": "2024-10-28 07:40:00", "b": 478.25}, {"a": "2024-10-28 07:45:00", "b": 487.0}, {"a": "2024-10-28 07:50:00", "b": 499.0}, {"a": "2024-10-28 07:55:00", "b": 526.0}, {"a": "2024-10-28 08:00:00", "b": 552.4}, {"a": "2024-10-28 08:05:00", "b": 543.2}, {"a": "2024-10-28 08:10:00", "b": 538.2}, {"a": "2024-10-28 08:15:00", "b": 542.75}, {"a": "2024-10-28 08:20:00", "b": 525.25}, {"a": "2024-10-28 08:25:00", "b": 515.0}, {"a": "2024-10-28 08:30:00", "b": 510.75}, {"a": "2024-10-28 08:35:00", "b": 509.8}, {"a": "2024-10-28 08:40:00", "b": 507.25}, {"a": "2024-10-28 08:45:00", "b": 501.6}, {"a": "2024-10-28 08:50:00", "b": 501.75}, {"a": "2024-10-28 08:55:00", "b": 503.3333333333333}, {"a": "2024-10-28 09:00:00", "b": 508.25}, {"a": "2024-10-28 09:05:00", "b": 490.4}, {"a": "2024-10-28 09:10:00", "b": 470.8}, {"a": "2024-10-28 09:15:00", "b": 474.4}, {"a": "2024-10-28 09:20:00", "b": 471.5}, {"a": "2024-10-28 09:25:00", "b": 477.4}, {"a": "2024-10-28 09:30:00", "b": 472.3333333333333}, {"a": "2024-10-28 09:35:00", "b": 470.25}, {"a": "2024-10-28 09:40:00", "b": 464.6}, {"a": "2024-10-28 09:45:00", "b": 466.0}, {"a": "2024-10-28 09:50:00", "b": 473.75}, {"a": "2024-10-28 09:55:00", "b": 472.5}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    