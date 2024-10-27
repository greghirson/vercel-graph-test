
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-27 09:20:00", "b": 641.6}, {"a": "2024-10-27 09:25:00", "b": 630.5}, {"a": "2024-10-27 09:30:00", "b": 633.0}, {"a": "2024-10-27 09:35:00", "b": 644.0}, {"a": "2024-10-27 09:40:00", "b": 638.6}, {"a": "2024-10-27 09:45:00", "b": 627.25}, {"a": "2024-10-27 09:50:00", "b": 633.3333333333334}, {"a": "2024-10-27 09:55:00", "b": 630.5}, {"a": "2024-10-27 10:00:00", "b": 629.75}, {"a": "2024-10-27 10:05:00", "b": 626.8}, {"a": "2024-10-27 10:10:00", "b": 624.4}, {"a": "2024-10-27 10:15:00", "b": 621.0}, {"a": "2024-10-27 10:20:00", "b": 615.6}, {"a": "2024-10-27 10:25:00", "b": 629.0}, {"a": "2024-10-27 10:30:00", "b": 619.0}, {"a": "2024-10-27 10:35:00", "b": 622.5}, {"a": "2024-10-27 10:40:00", "b": 613.6}, {"a": "2024-10-27 10:45:00", "b": 614.6}, {"a": "2024-10-27 10:50:00", "b": 597.6}, {"a": "2024-10-27 10:55:00", "b": 597.4}, {"a": "2024-10-27 11:00:00", "b": 626.8}, {"a": "2024-10-27 11:05:00", "b": 662.2}, {"a": "2024-10-27 11:10:00", "b": 669.2}, {"a": "2024-10-27 11:15:00", "b": 655.6}, {"a": "2024-10-27 11:20:00", "b": 672.2}, {"a": "2024-10-27 11:25:00", "b": 680.25}, {"a": "2024-10-27 11:30:00", "b": 674.25}, {"a": "2024-10-27 11:35:00", "b": 663.0}, {"a": "2024-10-27 11:40:00", "b": 659.25}, {"a": "2024-10-27 11:45:00", "b": 669.8}, {"a": "2024-10-27 11:50:00", "b": 667.8}, {"a": "2024-10-27 11:55:00", "b": 656.0}, {"a": "2024-10-27 12:00:00", "b": 633.2}, {"a": "2024-10-27 12:05:00", "b": 600.5}, {"a": "2024-10-27 12:10:00", "b": 602.2}, {"a": "2024-10-27 12:15:00", "b": 591.6}, {"a": "2024-10-27 12:20:00", "b": 591.4}, {"a": "2024-10-27 12:25:00", "b": 605.2}, {"a": "2024-10-27 12:30:00", "b": 592.0}, {"a": "2024-10-27 12:35:00", "b": 579.5}, {"a": "2024-10-27 12:40:00", "b": 563.2}, {"a": "2024-10-27 12:45:00", "b": 535.0}, {"a": "2024-10-27 12:50:00", "b": 533.3333333333334}, {"a": "2024-10-27 12:55:00", "b": 525.4}, {"a": "2024-10-27 13:00:00", "b": 525.6666666666666}, {"a": "2024-10-27 13:05:00", "b": 506.0}, {"a": "2024-10-27 13:10:00", "b": 468.8}, {"a": "2024-10-27 13:15:00", "b": 447.8}, {"a": "2024-10-27 13:20:00", "b": 451.4}, {"a": "2024-10-27 13:25:00", "b": 461.0}, {"a": "2024-10-27 13:30:00", "b": 461.8}, {"a": "2024-10-27 13:35:00", "b": 446.25}, {"a": "2024-10-27 13:40:00", "b": 450.8}, {"a": "2024-10-27 13:45:00", "b": 454.4}, {"a": "2024-10-27 13:50:00", "b": 460.0}, {"a": "2024-10-27 13:55:00", "b": 447.6}, {"a": "2024-10-27 14:00:00", "b": 454.5}, {"a": "2024-10-27 14:05:00", "b": 444.4}, {"a": "2024-10-27 14:10:00", "b": 443.8}, {"a": "2024-10-27 14:15:00", "b": 446.75}, {"a": "2024-10-27 14:20:00", "b": 436.0}, {"a": "2024-10-27 14:25:00", "b": 435.0}, {"a": "2024-10-27 14:30:00", "b": 428.0}, {"a": "2024-10-27 14:35:00", "b": 423.0}, {"a": "2024-10-27 14:40:00", "b": 427.0}, {"a": "2024-10-27 14:45:00", "b": 427.25}, {"a": "2024-10-27 14:50:00", "b": 433.0}, {"a": "2024-10-27 14:55:00", "b": 425.6}, {"a": "2024-10-27 15:00:00", "b": 417.3333333333333}, {"a": "2024-10-27 15:05:00", "b": 421.0}, {"a": "2024-10-27 15:10:00", "b": 422.75}, {"a": "2024-10-27 15:15:00", "b": 410.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    